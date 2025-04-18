import { UUID } from 'node:crypto';
import { City, ConvenienceType, HousingType } from '../../../types/index.js';

export class CreateOfferDto {
  public name: string;
  public description: string;
  public city: City;
  public previewUrl: string;
  public images: string[];
  public isPremium: boolean;
  public isFavourite: boolean;
  public rating: number;
  public housingType: HousingType;
  public rooms: number;
  public guests: number;
  public cost: number;
  public conveniences: ConvenienceType[];
  public authorId: UUID;
  public latitude: number;
  public longitude: number;
  public commentsNumber: number;
}
