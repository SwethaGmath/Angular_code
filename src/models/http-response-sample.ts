export class HttpResponseSample {
    isValid: boolean;
    data: Data;
    errors?: null;
  }
  export class Data {
    pendingOrdersCount: number;
    expiringSellerPricesCount: number;
    expiringMSupplyPricesCount: number;
    pendingManufacturersCount: number;
    pendingBuyersCount: number;
  }
  