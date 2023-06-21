import { Body } from '@nestjs/common';
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateArticleDto {
    @IsString()
    @MinLength(5)
    @ApiProperty()
    title : string;
    @IsString()
    @IsOptional()
    @MaxLength(500)
    @ApiProperty({required : false})
    description? : string
    @IsString()
    @ApiProperty()
    body : string ;
    @IsBoolean()
    @IsOptional()
    @ApiProperty({required : false, default:false})
    published? : boolean = false ;  
}
