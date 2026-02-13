import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ResourseFile';

export default class Hero extends LightningElement {

    heroImage = Image_Url + '/ResourseFile/HeroImage.png';
}