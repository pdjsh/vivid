export interface SaleEvent {
  event_type: string;
  order_hash: string;
  protocol_address: string;
  closing_date: number;
  nft: Nft;
  quantity: number;
  seller: string;
  buyer: string;
  payment: Payment;
  transaction: string;
  event_timestamp: number;
}

export interface TransferEvent {
  event_type: string;
  transaction: string;
  from_address: string;
  to_address: string;
  quantity: number;
  nft: Nft;
  event_timestamp: number;
}

export interface Nft {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
}

export interface Payment {
  quantity: string;
  token_address: string;
  decimals: number;
  symbol: string;
}

export interface MovementResponse {
  asset_events: (SaleEvent | TransferEvent)[];
  next: string;
}
