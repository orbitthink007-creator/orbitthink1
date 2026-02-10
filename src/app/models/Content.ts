import mongoose, { Schema, Document, Model } from 'mongoose';

// Flexible schema to match main-data.json structure
// Using Mixed type for flexibility since this is a CMS-style config

const ContentSchema = new Schema({
    site: { type: Schema.Types.Mixed },
    header: { type: Schema.Types.Mixed },
    footer: { type: Schema.Types.Mixed },
    home: { type: Schema.Types.Mixed },
    aboutPage: { type: Schema.Types.Mixed },
    common: { type: Schema.Types.Mixed },
    projectPage: { type: Schema.Types.Mixed },
    servicePage: { type: Schema.Types.Mixed },
    blogPage: { type: Schema.Types.Mixed },
    testimonialPage: { type: Schema.Types.Mixed },
    contactPage: { type: Schema.Types.Mixed },
    // Timestamp for when it was last updated
    lastUpdated: { type: Date, default: Date.now }
}, { strict: false }); // Allow other fields if added later

export interface IContent extends Document {
    site: any;
    header: any;
    footer: any;
    home: any;
    aboutPage: any;
    common: any;
    projectPage: any;
    servicePage: any;
    blogPage: any;
    testimonialPage: any;
    contactPage: any;
    lastUpdated: Date;
}

// Check if model exists to prevent overwrite error in dev hot reload
const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);

export default Content;
