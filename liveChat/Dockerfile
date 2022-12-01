FROM mcr.microsoft.com/dotnet/sdk:6.0 AS base
WORKDIR /app
EXPOSE 80/tcp

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["liveChat.csproj", "./"]
RUN dotnet restore "liveChat.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "liveChat.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "liveChat.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "liveChat.dll"]
