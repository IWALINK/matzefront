# Makefile for Royella Docker environments

.PHONY: help dev prod dev-build prod-build dev-down prod-down dev-logs prod-logs dev-shell prod-shell clean

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Development environment
dev: ## Start development environment
	docker-compose -f docker-compose.dev.yml up -d

dev-build: ## Build and start development environment
	docker-compose -f docker-compose.dev.yml up -d --build

dev-down: ## Stop development environment
	docker-compose -f docker-compose.dev.yml down

dev-logs: ## Show development logs
	docker-compose -f docker-compose.dev.yml logs -f

dev-shell: ## Access development container shell
	docker-compose -f docker-compose.dev.yml exec royella-app-dev sh

# Production environment
prod: ## Start production environment
	docker-compose -f docker-compose.prod.yml up -d

prod-build: ## Build and start production environment
	docker-compose -f docker-compose.prod.yml up -d --build

prod-down: ## Stop production environment
	docker-compose -f docker-compose.prod.yml down

prod-logs: ## Show production logs
	docker-compose -f docker-compose.prod.yml logs -f

prod-shell: ## Access production container shell
	docker-compose -f docker-compose.prod.yml exec royella-app-prod sh

# Utility commands
clean: ## Clean up all containers and volumes
	docker-compose -f docker-compose.dev.yml down -v
	docker-compose -f docker-compose.prod.yml down -v
	docker system prune -f

status: ## Show status of all containers
	@echo "Development containers:"
	docker-compose -f docker-compose.dev.yml ps
	@echo "\nProduction containers:"
	docker-compose -f docker-compose.prod.yml ps

# SSL setup (for production)
setup-ssl: ## Create SSL directory and run SSL setup script
	@./setup-ssl.sh

# Quick start commands
start-dev: dev-build ## Quick start development environment
	@echo "Development environment started at http://localhost:8080"

start-prod: prod-build ## Quick start production environment
	@echo "Production environment started at http://localhost:80"
	@echo "Configure your domain lamatzeresto.ch to point to this server"

# Infomaniak deployment
deploy-infomaniak: ## Deploy to Infomaniak hosting
	@./deploy-infomaniak.sh
