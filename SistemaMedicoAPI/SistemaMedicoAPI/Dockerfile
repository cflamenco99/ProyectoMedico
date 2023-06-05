FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY SistemaMedicoAPI/*.csproj ./SistemaMedicoAPI/
RUN dotnet restore

# copy everything else and build app
COPY SistemaMedicoAPI/. ./SistemaMedicoAPI/
WORKDIR /app/SistemaMedicoAPI
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS runtime
WORKDIR /app
COPY --from=build /app/SistemaMedicoAPI/out .
EXPOSE 80
EXPOSE 443
CMD ["dotnet", "SistemaMedicoAPI.dll"]