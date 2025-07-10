/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta como arquivos estáticos
  // Configurações específicas para exportação estática para Azure
  distDir: 'out',
  trailingSlash: false,
  images: {
    unoptimized: true, // Desativa otimização de imagens para permitir exportação estática
  },
  // Configurações de ambiente
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  // Desativa geração de arquivos .gz
  compress: false,
}

module.exports = nextConfig
