import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  success() {
    return { ok: true, message: 'Payment succesful' };
  }

  @Get('cancel')
  cancel() {
    return { ok: true, message: 'Payment cancel' };
  }

  @Post('webhook')
  async stripeWebhook() {
    return 'webook';
  }
}
