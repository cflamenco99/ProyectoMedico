FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SistemaMedicoAPI/SistemaMedicoAPI/SistemaMedicoAPI.csproj", "SistemaMedicoAPI/"]
RUN dotnet restore "SistemaMedicoAPI/SistemaMedicoAPI/SistemaMedicoAPI.csproj"
COPY . .
WORKDIR "/src/SistemaMedicoAPI"
RUN dotnet build "SistemaMedicoAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SistemaMedicoAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet SistemaMedicoAPI.dll