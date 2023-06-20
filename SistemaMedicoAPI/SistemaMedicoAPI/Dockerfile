FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /app

COPY *.sln .
COPY SistemaMedicoAPI/*.csproj ./SistemaMedicoAPI/
RUN dotnet restore

COPY SistemaMedicoAPI/. ./SistemaMedicoAPI/
WORKDIR /app/SistemaMedicoAPI
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS runtime
WORKDIR /app
COPY --from=build /app/SistemaMedicoAPI/out .
EXPOSE 80
EXPOSE 443
CMD ["dotnet", "SistemaMedicoAPI.dll"]