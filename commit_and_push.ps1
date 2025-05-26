# Script para fazer commit e push do projeto
# Substitua "Seu Nome" e "seu.email@example.com" com suas informações

# Caminho completo para o Git
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Configurar Git
& $gitPath config user.name "Victor Bastos"
& $gitPath config user.email "victorbastos26@hotmail.com"

# Adicionar todos os arquivos
& $gitPath add .

# Fazer commit
& $gitPath commit -m "Atualização do portfolio"

# Fazer push
& $gitPath push

Write-Host "Commit e push concluídos com sucesso!"
