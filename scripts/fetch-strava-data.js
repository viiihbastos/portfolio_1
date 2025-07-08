// Script para buscar dados do Strava e salvá-los como arquivo estático
// Execute com: node fetch-strava-data.js

// ----------------------
// INSTRUÇÕES PARA CONFIGURAÇÃO:
// ----------------------
// 1. Primeiro acesse sua página de hobbies e clique em "Connect with Strava"
// 2. Após autorizar, abra o console do navegador (F12) e execute:
//    - Para obter o refresh_token: 
//      console.log(JSON.parse(localStorage.getItem('strava_tokens')).refresh_token)
//    - Para obter o athleteId:
//      fetch('https://www.strava.com/api/v3/athlete', { 
//        headers: { 
//          Authorization: `Bearer ${JSON.parse(localStorage.getItem('strava_tokens')).access_token}` 
//        } 
//      }).then(r => r.json()).then(data => console.log('Seu athlete ID é:', data.id))
// 3. Copie os valores obtidos e preencha as constantes REFRESH_TOKEN e athleteId abaixo
// 4. Execute o script novamente: node scripts/fetch-strava-data.js

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Strava API constants - use suas credenciais
const CLIENT_ID = '165622';
const CLIENT_SECRET = 'ba826640782efd86b910d33434ba4c6a5f9b1b6c';
const REFRESH_TOKEN = '2795743ab959af3b149c1aab15ed36e985301c28'; // Token de atualização do usuário

// ----------------------
// Funções auxiliares
// ----------------------

// Formatar distância em km
function formatDistance(meters) {
  return (meters / 1000).toFixed(1) + ' km';
}

// Formatar tempo
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

// Formatar data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ----------------------
// Funções principais da API Strava
// ----------------------

// Obter novo access_token usando refresh_token
async function getAccessToken() {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
      scope: 'activity:read_all,profile:read_all,read_all'
    })
  });

  if (!response.ok) {
    throw new Error(`Error refreshing token: ${response.statusText}`);
  }
  
  const data = await response.json();
  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: data.expires_at
  };
}

// Obter atividades do atleta
async function getAthleteActivities(access_token, limit = 10) {
  console.log('Buscando atividades do atleta...');
  console.log(`Access Token (primeiros 10 caracteres): ${access_token.substring(0, 10)}...`);
  
  try {
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=${limit}`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Resposta da API: ${response.status} ${response.statusText}`);
      console.error(`Detalhes: ${errorText}`);
      throw new Error(`Error fetching activities: ${response.statusText} (${response.status})`);
    }
    
    console.log('Atividades obtidas com sucesso!');
    const activities = await response.json();
    
    // Formatar dados para exibição
    return activities.map(activity => ({
      id: activity.id,
      name: activity.name,
      type: activity.type,
      distance: activity.distance,
      moving_time: activity.moving_time,
      start_date: activity.start_date,
      // Dados formatados
      formatted: {
        distance: formatDistance(activity.distance),
        moving_time: formatTime(activity.moving_time),
        start_date: formatDate(activity.start_date)
      }
    }));
  } catch (error) {
    console.error('Erro ao buscar atividades:', error);
    throw error;
  }
}

// Obter estatísticas do atleta
async function getAthleteStats(access_token) {
  try {
    console.log('Buscando dados do atleta...');
    // Vamos obter o ID do atleta diretamente da API
    const athleteResponse = await fetch('https://www.strava.com/api/v3/athlete', {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    
    if (!athleteResponse.ok) {
      const errorText = await athleteResponse.text();
      console.error(`Resposta da API (atleta): ${athleteResponse.status} ${athleteResponse.statusText}`);
      console.error(`Detalhes: ${errorText}`);
      throw new Error(`Error fetching athlete data: ${athleteResponse.statusText} (${athleteResponse.status})`);
    }
    
    const athleteData = await athleteResponse.json();
    const athleteId = athleteData.id;
    
    console.log(`Athlete ID obtido: ${athleteId}`);
    
    if (!athleteId) {
      throw new Error('Athlete ID is required. Get it from https://www.strava.com/api/v3/athlete');
    }

    console.log('Buscando estatísticas do atleta...');
    const response = await fetch(
      `https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Resposta da API (stats): ${response.status} ${response.statusText}`);
      console.error(`Detalhes: ${errorText}`);
      throw new Error(`Error fetching stats: ${response.statusText} (${response.status})`);
    }

    console.log('Estatísticas obtidas com sucesso!');
    const stats = await response.json();
    
    // Adicionar dados formatados
    const formattedStats = {
      ...stats,
      formatted: {
        recent_run_totals: {
          count: stats.recent_run_totals.count,
          distance: formatDistance(stats.recent_run_totals.distance),
          moving_time: formatTime(stats.recent_run_totals.moving_time)
        },
        recent_ride_totals: {
          count: stats.recent_ride_totals.count,
          distance: formatDistance(stats.recent_ride_totals.distance),
          moving_time: formatTime(stats.recent_ride_totals.moving_time)
        },
      all_run_totals: {
        count: stats.all_run_totals.count,
        distance: formatDistance(stats.all_run_totals.distance),
        moving_time: formatTime(stats.all_run_totals.moving_time)
      },
      all_ride_totals: {
        count: stats.all_ride_totals.count,
        distance: formatDistance(stats.all_ride_totals.distance),
        moving_time: formatTime(stats.all_ride_totals.moving_time)
      }
    }
  };
  
  return formattedStats;
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    throw error;
  }
}

// ----------------------
// Função principal
// ----------------------

async function main() {
  try {
    console.log('Iniciando busca de dados do Strava...');
    
    // Verificar se o REFRESH_TOKEN está configurado
    if (!REFRESH_TOKEN) {
      console.error('REFRESH_TOKEN é necessário. Siga as instruções no README para configurar.');
      return;
    }
    
    // Obter novo access_token
    const tokens = await getAccessToken();
    console.log('Token de acesso obtido com sucesso');
    console.log(`Novo refresh_token: ${tokens.refresh_token}`);
    console.log('⚠️ Atualize o script com este novo refresh_token para uso futuro');
    
    // Buscar atividades e estatísticas
    const activities = await getAthleteActivities(tokens.access_token, 6);
    console.log(`Obtidas ${activities.length} atividades recentes`);
    
    const stats = await getAthleteStats(tokens.access_token);
    console.log('Estatísticas do atleta obtidas com sucesso');
    
    // Criar objeto de dados combinados
    const stravaData = {
      lastUpdated: new Date().toISOString(),
      activities,
      stats
    };
    
    // Salvar dados em arquivo
    const dataFilePath = path.resolve(__dirname, '../app/hobbies/data/strava-data.json');
    
    // Criar diretório se não existir
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(dataFilePath, JSON.stringify(stravaData, null, 2));
    console.log(`Dados salvos com sucesso em ${dataFilePath}`);
    
  } catch (error) {
    console.error('Erro ao buscar dados do Strava:', error);
  }
}

// Executar função principal
main();
