import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async submitContent(
    @Req() req: { user?: { email?: string } },
    @Body() body: { campaignId: string; postLink: string },
  ) {
    if (!req.user || !req.user.email) {
      throw new Error('User not authenticated');
    }
    return this.submissionsService.submitCampaignContent(
      req.user.email,
      body.campaignId,
      body.postLink,
    );
  }

  @Get('performance')
  @UseGuards(JwtAuthGuard)
  async getPerformance(@Req() req: { user?: { email?: string } }) {
    if (!req.user || !req.user.email) {
      throw new Error('User not authenticated');
    }
    return this.submissionsService.getPerformanceMetrics(req.user.email);
  }

  @Get('campaign/:campaignId')
  @UseGuards(JwtAuthGuard)
  async getSubmissionsForCampaign(@Param('campaignId') campaignId: string) {
    return this.submissionsService.getSubmissionsForCampaign(campaignId);
  }

  @Patch(':submissionId')
  @UseGuards(JwtAuthGuard)
  async approveRejectSubmission(
    @Param('submissionId') submissionId: string,
    @Body() body: { status: 'approved' | 'rejected' },
  ) {
    return this.submissionsService.approveRejectSubmission(
      submissionId,
      body.status,
    );
  }
}
