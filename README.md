# mongoose-fake
advanced modeling with mongoose

[![Build Status](https://travis-ci.org/Chkhikvadze/mongoose-fake.svg?branch=master)](https://github.com/Chkhikvadze/mongoose-fake)


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
  * latitude
  * longitude
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
  * month
  * weekday
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
  * words
  * sentence
  * sentences
  * paragraph
  * paragraphs
  * text
  * lines
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
  * words
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
