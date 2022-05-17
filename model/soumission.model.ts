import { model, Model, Document, Schema } from 'mongoose';

export interface ISoumission extends Document {
    entreprise: String;
    montant: Number;
    is_accepted: Boolean;
    is_conform: Boolean;
}

const SoumissionSchema: Schema = new Schema({
    entreprise: { type: String, required: true },
    montant: { type: Number, required: true },
    is_accepted: { type: Boolean, default : false },
    is_conform: { type: Boolean, default: false }
});

export const SoumissionModel: Model<ISoumission> = model<ISoumission>('soumission', SoumissionSchema);