FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json package-lock.json* npm-shrinkwrap.json* ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
# Add the node_modules/.bin to PATH so next command is available
ENV PATH=/usr/src/app/node_modules/.bin:/mingw64/bin:/usr/bin:/c/Users/HP/bin:/c/Users/HP/AppData/Local/fnm_multishells/28340_1775121615560:/c/Python314/Scripts:/c/Python314:/c/WINDOWS/system32:/c/WINDOWS:/c/WINDOWS/System32/Wbem:/c/WINDOWS/System32/WindowsPowerShell/v1.0:/c/WINDOWS/System32/OpenSSH:/cmd:/c/Program Files/dotnet:/c/Program Files/CMake/bin:/c/Program Files (x86)/cloudflared:/c/WINDOWS/system32:/c/WINDOWS:/c/WINDOWS/System32/Wbem:/c/WINDOWS/System32/WindowsPowerShell/v1.0:/c/WINDOWS/System32/OpenSSH:/cmd:/c/Program Files/dotnet:/c/Program Files/CMake/bin:/c/Program Files (x86)/cloudflared:/c/Users/HP/AppData/Roaming/Python/Python313/Scripts:/c/Users/HP/AppData/Local/Programs/Microsoft VS Code/bin:/c/Users/HP/AppData/Local/Programs/Ollama:/c/ffmpeg/ffmpeg/bin:/c/ProgramData/chocolatey/bin:/c/Program Files/GitHub CLI:/c/Program Files/Docker/Docker/resources/bin:/c/Users/HP/.cargo/bin:/c/Users/HP/AppData/Local/Programs/Python/Python313/Scripts:/c/Users/HP/AppData/Local/Programs/Python/Python313:/c/Python314/Scripts:/c/Python314:/c/WINDOWS/system32:/c/WINDOWS:/c/WINDOWS/System32/Wbem:/c/WINDOWS/System32/WindowsPowerShell/v1.0:/c/WINDOWS/System32/OpenSSH:/cmd:/c/Program Files/dotnet:/c/Program Files/CMake/bin:/c/Program Files (x86)/cloudflared:/c/WINDOWS/system32:/c/WINDOWS:/c/WINDOWS/System32/Wbem:/c/WINDOWS/System32/WindowsPowerShell/v1.0:/c/WINDOWS/System32/OpenSSH:/cmd:/c/Program Files/dotnet:/c/Program Files/CMake/bin:/c/Program Files (x86)/cloudflared:/c/Users/HP/AppData/Roaming/Python/Python313/Scripts:/c/Users/HP/AppData/Local/Programs/Microsoft VS Code/bin:/c/Users/HP/AppData/Local/Programs/Ollama:/c/ffmpeg/ffmpeg/bin:/c/ProgramData/chocolatey/bin:/c/Program Files/GitHub CLI:/c/Program Files/Docker/Docker/resources/bin:/c/Users/HP/AppData/Roaming/Python/Python313/Scripts:/c/Users/HP/AppData/Local/Programs/Microsoft VS Code/bin:/c/Users/HP/AppData/Local/Programs/Ollama:/c/Users/HP/AppData/Roaming/npm
CMD ["next", "start"]
