var bootstrap = require('../bootstrap');
var assert = require('assert');
var log = bootstrap.log;
var TheAPI = bootstrap.request(bootstrap.testURL);

after (function(done){done();
})

    it('Test1: Create a video - PATCH request', function(done){
        TheAPI
            .patch('/videos/4')
            .send({
            	"id": 4,
        		"title": "JSON Syntax",
        		"description": "This is a description for the JSON Syntax video!  Yeeeeee haw",
        		"url": "https://SpiderLMS.s3.amazonaws.com/1234LKJ",
        		//"uploaded_by": 2,
        		"created_at": "2014-03-17 10:10:10",
        		"updated_at": "2014-03-17 10:10:10",
        		"tags": "tag1, tag2, tag3, tag4, tags5",
            	})

            .expect(201)
            .end(function(err, res){
                if(err){
                	log.error('error: '+err);

                }
                else{ log.info('test 1 response: ' +JSON.stringify(res.body));
                assert.equal(res.statusCode, 201);
                assert.equal(res.body.id, 2);
                assert.equal(res.body.title, "Updating the video title!");
                assert.equal(res.body.description, "This is a description for the Spidey callbacks video.  yay.");
                assert.equal(res.body.url,"https://SpiderLMS.s3.amazonaws.com/12345");
                assert.equal(res.body.tags,"tag1, tag2, tag3, tag4, tags5");
                assert.equal(res.body.created_at, "2014-03-17 10:10:10");
                assert.equal(res.body.updated_at, "2014-03-17 10:10:10")


                done();
            };
        });
    });

                // log.info('Test1 Response: '+JSON.stringify(res.body));
                // log.info('Test1: Response code: '+res.statusCode);

                // assert.equal(res.statusCode, 200);
                // assert.equal(res.body.id, 'Sarah Conner');
                // assert.equal(res.body.title, 'sconner@mobiquityinc.com');
                // assert.equal(res.body.description, 'description');
                // assert.equal(res.body.url, 'This is a description for the Spidey callbacks video.  yay.');

//                 {

  

//   // "id": 2
//   // "title": "Updating the video title!",
//   // "description": "This is a description for the Spidey callbacks video.  yay.",
//   // "url": "https://SpiderLMS.s3.amazonaws.com/12345",
//   // "tags" : "tag1, tag2, tag3, tag4, tags5"
//   // "created_at": "2014-03-17 10:10:10",
//   // "updated_at": "2014-03-17 10:10:10"
// } 

//                  done();
//              });
//      })
it('Test1: Retrieve a video - get request', function(done){
        TheAPI
            .get('/videos/2')
            .send({} )
            .expect(200)
            .end(function(err, res){
                if(err){
                	log.error('error: '+err);

                }
                else{ log.info('test 2 response: ' +JSON.stringify(res.body));
                	log.info('test 2 Response code:'+res.statusCode);
	                assert.equal(res.body.id, 2);
   		            assert.equal(res.body.title, "Javascript Callbacks");
   	    	        assert.equal(res.body.description, "This is a description for the Spidey callbacks video.  yay.");
	       		    assert.equal(res.body.url,"https://SpiderLMS.s3.amazonaws.com/23234234LSKDJFSDF");
	                assert.equal(res.body.uploaded_by, 2);
   		            assert.equal(res.body.tags,"tag1, tag2, tag3, tag4");
   		            assert.equal(res.body.created_at, "2014-03-17 10:10:10");
   		            assert.equal(res.body.updated_at, "2014-03-17 10:10:10");
   		            // assert.equal(res.body.assets,["assets, id: 1,  title: the slide show, filetype: pptx, fileurl:"http://this.is.an.amazon.s3.url "] )
	   	            //var firstAsset = rest.body.assets[0].id;
	   	            assert.equal(res.body.assets[0].id, 1);
	   	            assert.equal(res.body.assets[0].title, "The slide show");
	   	            assert.equal(res.body.assets[0].filetype, "pptx");
	   	            assert.equal(res.body.assets[0].fileurl, "http://this.is.an.amazon.s3.url");
	   	            assert.equal(res.body.assets[1].id, 2);
	   	            assert.equal(res.body.assets[1].title, "The notes");
	   	            assert.equal(res.body.assets[1].filetype, "pdf");
	   	            assert.equal(res.body.assets[1].fileurl, "http://this.is.an.amazon.s3.url");
	   	           

   	             	//console.log(firstAsset +JSON.stringify()
   		            // console.log("First asset: " + JSON.stringify(firstAsset, null, 4));


// // 
//                assert.equal(res.body.assets, )
// "assets" :  [{  "id" : 1, "title" : "The slide show", "filetype" : "pptx", "fileurl" : "http://this.is.an.amazon.s3.url" }, 
//{ "id" : 2,  "title" : "The notes", "filetype" : "pdf", "fileurl" : "http://this.is.an.amazon.s3.url" }]}

                	done();
            	}
        	});

    	});

    it('Test3: Remove a Video - DELETE request', function(done){
        TheAPI
            .del('/videos/3')
            .send()
            .expect(204)
            .end(function(err, res){
                if(err){
                	log.error('error: '+err);

                }
                else{ log.info('test 2 response: ' +JSON.stringify(res.body));
               log.info('test 2 Response code:'+res.statusCode);
               // assert.equal}
                
                done();
            }
            });
    });


