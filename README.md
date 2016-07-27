# mongoose-fake
Advanced modeling with mongoose.

Fill mongoose schema with easy types and seed mongoose model by fake data.

[![Build Status](https://travis-ci.org/Chkhikvadze/mongoose-fake.svg?branch=master)](https://github.com/Chkhikvadze/mongoose-fake)



##Usege 1
	var mongoose = require('mongoose');
    var types = require('mongoose-easy-types').Types;

    var plugin = require('mongoose-easy-types').Plugin;
    mongoose.plugin(plugin)

    var schema = mongoose.Schema({
    			firstName : types.name.firstName({}),
    			lastName : types.name.firstName({require : true})
    			date : types.date.future(),
    			price : types.commerce.price(),
    			email : types.internet.email({  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                'Please fill a valid email address']    }),
    			isTrue : types.random.boolean(),
    			imageUrl : types.image.imageUrl({default: false}),
    			peoples : [{
	                name : types.name.findName({}),
	                date : types.date.future()
    			}]
    		});

	model = mongoose.model('model', schema);

	var count = 10;
	nestedField = 'peoples';
	nestedCount  = 15;
	model.seed(20, { peoples : 10}) //filled database with 20 items, peoples property filled with 10 items.

##Usege 2
	var mongoose = require('mongoose');
    var plugin = require('mongoose-easy-types').Plugin;
    var types = require('mongoose-easy-types').Types;

    mongoose.plugin(plugin)

    var schema = mongoose.Schema({
    			firstName : {
    				type : types.name.firstName().type,
    				fakePath : types.name.firstName().fakePath
    			},
    			number : {
    				type : types.random.number().type,
    				fakePath : types.random.number().fakePath
    			},
    			isTrue : {
    				type : types.random.boolean().type,
    				fakePath : types.random.boolean().fakePath,
                    default : false
    			}
    		});

	model = mongoose.model('model', schema);
	var items = model.fake(10); //return list of filled models
	var fakes = model.fake(count, 'firstName') // return list of filled model (only filled firstName)



### Plugin Functions
* model.seed(count, { nestedFieldCount : nestedCount});
* model.fake(count);
* model.fake(count, 'property1, property2, property3')


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
