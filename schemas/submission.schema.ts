import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubmissionDocument = Submission & Document;

@Schema()
export class Submission {
  @Prop({ required: true })
  influencerId: string;

  @Prop({ required: true })
  campaignId: string;

  @Prop({ required: true })
  postLink: string;

  @Prop({ enum: ['pending', 'approved', 'rejected'], default: 'pending' })
  status: string;

  @Prop({ default: Date.now })
  submissionDate: Date;

  @Prop({ default: 0 })
  estimatedEngagement: number; // Likes, shares, etc.
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
