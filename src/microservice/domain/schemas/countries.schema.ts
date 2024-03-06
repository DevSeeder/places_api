/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons/dist/schema/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type CountryDocument = Country & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.COUNTRIES })
export class Country extends AbstractSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  iso3: string;

  @Prop({ required: true })
  id: number;
}

const schema = SchemaFactory.createForClass(Country);
export const CountrySchema = schema;
