Rails.configuration.stripe = {
  :stripe_publishable_key => ENV['STRIPE_PUBLISHABLE_KEY'],
  :stripe_api_key => ENV['STRIPE_SECRET_KEY']
}

Stripe.api_key = Rails.configuration.stripe[:secret_api_key]
