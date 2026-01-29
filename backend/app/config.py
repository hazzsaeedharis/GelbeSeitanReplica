"""
Production-ready configuration
Best practices for AWS deployment
"""
import os
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings with environment variable support"""
    
    # App Info
    APP_NAME: str = "Gelbe Seiten API"
    APP_VERSION: str = "2.0.0"
    DEBUG: bool = False
    
    # Database - using existing events_db with 3M+ businesses already loaded
    DATABASE_URL: str = "postgresql://postgres:password@localhost:5432/events_db"
    DB_POOL_SIZE: int = 20
    DB_MAX_OVERFLOW: int = 40
    DB_POOL_TIMEOUT: int = 30
    DB_POOL_RECYCLE: int = 3600
    
    # Elasticsearch (optional)
    ELASTICSEARCH_HOST: str = "localhost"
    ELASTICSEARCH_PORT: int = 9200
    USE_ELASTICSEARCH: bool = False
    
    # Redis (optional)
    REDIS_URL: str = "redis://localhost:6379/0"
    USE_REDIS_CACHE: bool = False
    CACHE_TTL: int = 300
    
    # API Settings
    API_HOST: str = "0.0.0.0"
    API_PORT: int = 8000
    WORKERS: int = 4
    
    # CORS
    CORS_ORIGINS: list = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://192.168.12.214:3000",  # Network access
        "http://192.168.12.214:3001",  # Network access
        "http://localhost:8000",
        "http://127.0.0.1:8000"  # Update for production
    ]
    
    # Security
    SECRET_KEY: str = "change-this-in-production-use-env-variable"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 60
    
    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FILE: str = "logs/app.log"
    
    # AWS Settings (for production)
    AWS_REGION: str = "eu-central-1"
    S3_BUCKET: str = ""
    
    # Geocoding
    GEOCODING_PROVIDER: str = "nominatim"
    GEOCODING_RATE_LIMIT: int = 1
    
    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings"""
    return Settings()


# Export singleton
settings = get_settings()
