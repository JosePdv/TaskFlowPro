FROM node:20-slim

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos (agora que você já gerou o projeto no Host)
COPY . .

# Porta padrão do Vite
EXPOSE 5173

# O '--host' é fundamental para o Docker mapear a porta corretamente
CMD ["npm", "run", "dev", "--", "--host"]
