/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractSchema } from '@devseeder/nestjs-microservices-commons/dist/schema/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';

export type CityDocument = City & Document;

@Schema({ timestamps: true, collection: DependencyEntityTokens.CITIES })
export class City extends AbstractSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  stateCode: string;

  @Prop({ required: true })
  stateId: number;

  @Prop({ required: true })
  id: number;
}

const schema = SchemaFactory.createForClass(City);
export const CitySchema = schema;
