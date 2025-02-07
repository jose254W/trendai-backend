import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from '../../schemas/campaign.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
  ) {}

  async getAllCampaigns() {
    return this.campaignModel.find().exec();
  }

  async joinCampaign(userId: string, campaignId: string) {
    return this.campaignModel.findByIdAndUpdate(
      campaignId,
      { $addToSet: { influencers: userId } },
      { new: true },
    );
  }
}
