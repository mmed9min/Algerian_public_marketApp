import { connect, disconnect } from "../config/db.config";
import { SoumissionModel } from '../model/soumission.model';
import { APILogger } from '../logger/api.logger';

export class SoumissionRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getSoumission() {
        const soumissions = await SoumissionModel.find({});
        console.log('soumissions:::', soumissions);
        return soumissions;
    }

    async createSoumission(soumission) {
        let data = {};
        try {
            data = await SoumissionModel.create(soumission);
         
            
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateSoumission(soumissionId,soumission) {
        let data = {};
        try {
       
            
            data = await SoumissionModel.findByIdAndUpdate(soumissionId,{soumission});
         
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteSoumission(soumissionId) {
        let data: any = {};
        try {
            data = await SoumissionModel.deleteOne({_id : soumissionId});
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}

