# mongoose-easy-types
Advanced modeling with mongoose.

Fill mongoose schema with easy types and seed mongoose model by fake data.

[![Build Status](https://travis-ci.org/Chkhikvadze/mongoose-easy-types.svg?branch=master)](https://github.com/Chkhikvadze/mongoose-easy-types)

## Install

```bash
$ npm install mongoose-easy-types
```

##Usage 1 (Statics)
	var mongoose = require('mongoose');
    var Types = require('mongoose-easy-types').Types;
    var Plugin = require('mongoose-easy-types').Plugin;

    // register plugin globally (or on any schema you want to)
    mongoose.plugin(Plugin)

    var schema = mongoose.Schema({
        firstName : Types.name.firstName({}),
        lastName : Types.name.firstName({require : true})
        date : Types.date.future(),
        price : Types.commerce.price(),
        email : Types.internet.email({required: true}),
        gender : Types.random.boolean(),
        image : Types.image.imageUrl({default: false}),
        peoples : [{
            name : Types.name.findName({}),
            date : Types.date.future()
        }]
    });
	var Model = mongoose.model('Model', schema);

	// seed database with 20 fake items of type 'Model'
	Model.seed(20, callback);

##Usage 2 (Statics)
	var mongoose = require('mongoose');
    var Plugin = require('mongoose-easy-types').Plugin;
    var Types = require('mongoose-easy-types').Types;

    // register plugin globally (or on any schema you want to)
    mongoose.plugin(Plugin)

    var schema = mongoose.Schema({
        firstName : {
            type : Types.name.firstName().type,
            fakePath : Types.name.firstName().fakePath
        },
        age : {
            type : Types.random.number().type,
            fakePath : Types.random.number().fakePath
        },
        gender : {
            type : Types.random.boolean().type,
            fakePath : Types.random.boolean().fakePath,
            default : false
        }
    });
	Model = mongoose.model('Model', schema);

	Model.fake(10, callback); //return a list of model instances, filled with fake values

##Usage 3 (Instance)
	var mongoose = require('mongoose');
    var Plugin = require('mongoose-easy-types').Plugin;
    var Types = require('mongoose-easy-types').Types;

    var schema = mongoose.Schema({
        firstName : {
            type : Types.name.firstName().type,
            fakePath : Types.name.firstName().fakePath
        },
        age : Types.random.number(),
        gender : {
            type : Types.random.boolean().type,
            fakePath : Types.random.boolean().fakePath,
            default : false
        }
    });
    // register plugin into schema
    schema.plugin(Plugin);
	Model = mongoose.model('Model', schema);

	var item = new Model();
	item.fake(); // fill all fields with fake values
	// or
	item.fake(['firstName', 'age']); // fill only 'firstName' and 'age' with fake values

	console.log(item.firstName);
	// output: John
	console.log(item.age);
	// output: 21


### Plugin Functions
* Model.seed(count); // Static Method
* Model.fake(count); // Static Method
* modelInstance.fake(['optional fields arr']); // Instance Method


### Types

* address - { type : String }
  * zipCode
  * city
  * cityPrefix
  * citySuffix
  * streetName
  * streetAddress
  * streetSuffix
  * streetPrefix
  * secondaryAddress
  * county
  * country
  * countryCode
  * state
  * stateAbbr
  * latitude - { type : Number }
  * longitude - { type : Number }
* commerce
  * color
  * department
  * productName
  * price - { type : Number }
  * productAdjective
  * productMaterial
  * product
* company
  * suffixes - { type : [] }
  * companyName
  * companySuffix
  * catchPhrase
  * bs
  * catchPhraseAdjective
  * catchPhraseDescriptor
  * catchPhraseNoun
  * bsAdjective
  * bsBuzz
  * bsNoun
* date
  * past - { type : date }
  * future - { type : date }
  * between - { type : date }
  * recent - { type : date }
  * month - { type : Number }
  * weekday - { type : Number }
* fake
* finance
  * account
  * accountName
  * mask
  * amount - { type : Number }
  * transactionType
  * currencyCode
  * currencyName
  * currencySymbol
  * bitcoinAddress
* hacker - { type : String }
  * abbreviation
  * adjective
  * noun
  * verb
  * ingverb
  * phrase
* helpers
  * randomize
  * slugify
  * replaceSymbolWithNumber
  * replaceSymbols
  * shuffle - { type : [] }
  * mustache
  * createCard - { type : {} }
  * contextualCard - { type : {} }
  * userCard - { type : {} }
  * createTransaction - { type : {} }
* image - { type : String }
  * image
  * avatar
  * imageUrl
  * abstract
  * animals
  * business
  * cats
  * city
  * food
  * nightlife
  * fashion
  * people
  * nature
  * sports
  * technics
  * transport
* internet - { type : String }
  * avatar
  * email
  * exampleEmail
  * userName
  * protocol
  * url
  * domainName
  * domainSuffix
  * domainWord
  * ip
  * userAgent
  * color
  * mac
  * password
* lorem - { type : String }
  * word
  * words - if (asArray : true) { type : [] } else  { type : 'string' }
  * sentence
  * sentences
  * paragraph
  * paragraphs - if (asArray : true) { type : [] } else  { type : 'string' }
  * text
  * lines - if (asArray : true) { type : [] } else  { type : 'string' }
* name - { type : String }
  * firstName
  * lastName
  * findName
  * jobTitle
  * prefix
  * suffix
  * title
  * jobDescriptor
  * jobArea
  * jobType
* phone - { type : String }
  * phoneNumber
  * phoneNumberFormat
  * phoneFormats
* random
  * number - { type : number }
  * arrayElement
  * objectElement
  * boolean - { type : boolean }
  * word
  * words - if (asArray : true) { type : [] } else  { type : 'string' }
  * image
  * locale
  * alphaNumeric
* system - { type : String }
  * fileName
  * commonFileName
  * mimeType
  * commonFileType
  * commonFileExt
  * fileType
  * fileExt
  * directoryPath - //TODO
  * filePath - //TODO
  * semver
