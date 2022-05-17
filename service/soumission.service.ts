import { SoumissionRepository } from '../repository/soumission.repository';

export class SoumissionService {

    private soumissionRepository: SoumissionRepository;

    constructor() {
        this.soumissionRepository = new SoumissionRepository();
    }

    async getSoumission() {
        return await this.soumissionRepository.getSoumission();
    }

    async createSoumission(soumission) {
        return await this.soumissionRepository.createSoumission(soumission);
    }

    async updateSoumission(soumissionId,soumission) {
        return await this.soumissionRepository.updateSoumission(soumissionId,soumission);
    }

    async deleteSoumission(soumissionId) {
        return await this.soumissionRepository.deleteSoumission(soumissionId);
    }

}