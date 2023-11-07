export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    vehicleBrand: VehicleBrand;
    vehicleType: VehicleType;
    productBrand: ProductBrand;
    images: Image[]
  };
  
  export interface Image {
    id: string;
    url: string;
  }
  
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  };
  
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
  };
  
  export interface VehicleBrand {
    id: string;
    name: string;
  };

  export interface VehicleType {
    id: string;
    name: string;
  };

  export interface ProductBrand {
    id: string;
    name: string;
  };
  
  export interface Color {
    id: string;
    name: string;
    value: string;
  };

  export interface Size {
    id: string;
    name: string;
    value: string;
  };

  export interface Supplier {
    id: string;
    name: string;
    address: string;
    phone: string;
  };
 
  export interface Order {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
  };