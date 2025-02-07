import { Controller, Get, Patch, Param, Req, UseGuards } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Get()
  async getAllCampaigns() {
    return this.campaignsService.getAllCampaigns();
  }

  @Patch('join/:id')
  @UseGuards(JwtAuthGuard)
  async joinCampaign(@Req() req: any, @Param('id') campaignId: string) {
    return this.campaignsService.joinCampaign(req.user.email, campaignId);
  }
}
