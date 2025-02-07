import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Submission,
  SubmissionDocument,
} from '../../schemas/submission.schema';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectModel(Submission.name)
    private submissionModel: Model<SubmissionDocument>,
  ) {}

  async submitCampaignContent(
    influencerId: string,
    campaignId: string,
    postLink: string,
  ) {
    const submission = new this.submissionModel({
      influencerId,
      campaignId,
      postLink,
    });
    return submission.save();
  }

  async getSubmissionsForCampaign(campaignId: string) {
    return this.submissionModel.find({ campaignId }).exec();
  }
  async approveRejectSubmission(
    submissionId: string,
    status: 'approved' | 'rejected',
  ) {
    return this.submissionModel.findByIdAndUpdate(
      submissionId,
      { status },
      { new: true },
    );
  }

  async getPerformanceMetrics(influencerId: string) {
    return this.submissionModel
      .find({ influencerId })
      .select('campaignId postLink submissionDate estimatedEngagement')
      .exec();
  }
}
