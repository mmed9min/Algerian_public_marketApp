import { APILogger } from '../logger/api.logger';
import { SoumissionService } from '../service/soumission.service';

export class SoumissionController {

    private soumissionService: SoumissionService;
    private logger: APILogger;

    constructor() {
        this.soumissionService = new SoumissionService();
        this.logger = new APILogger()
    }

    async getSoumissions() {
        this.logger.info('Controller: getSoumissions', null)
        return await this.soumissionService.getSoumission();
    }

    async createSoumission(soumission) {
        this.logger.info('Controller: createSoumission', soumission);
        return await this.soumissionService.createSoumission(soumission);
    }

    async updateSoumission(soumissionId,soumission) {
        this.logger.info('Controller: updateSoumission', soumission);
        return await this.soumissionService.updateSoumission(soumissionId,soumission);
    }

    async deleteSoumission(soumissionId) {
        this.logger.info('Controller: deleteSoumission', soumissionId);
        return await this.soumissionService.deleteSoumission(soumissionId);
    }
}