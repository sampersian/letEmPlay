angular.module("letEmPlayApp").service("donationsService", function($http) {
  let donations = []
  return {
    items: [
      {
        "donation_id": 1,
        "position": "skater",
        "pieces": [
          {
            "type": 'shoulder pads',
            "size": 'lg',
            "sex": 'both',
            "brand": 'easton'
          },
          {
            "type": 'helmet',
            "size": 'lg',
            "sex": 'both',
            "brand": 'messier'
          },
          {
            "type": 'gloves',
            "size": '16 inch',
            "sex": 'both',
            "brand": 'ccm',
            "position": 'skater'}
        ],
        "title": "A few things for middle/high school players",
        "zip": 55356
      },
      {
        "donation_id": 2,
        "position": "skater",
        "pieces": [
          {
            "type": 'knee pads',
            "size": '20 inch',
            "sex": 'both',
            "brand": 'bauer'
          },
          {
            "type": 'stick',
            "size": 'intermediate',
            "flex": 85,
            "curve": "sakic",
            "shot": "right",
            "sex": 'both',
            "brand": 'easton'
          },
          {
            "type": 'elbow pads',
            "size": 'lg',
            "sex": 'both',
            "brand": 'ccm'
          },
          {
            "type": 'skates',
            "size": '10',
            "sex": 'mens',
            "brand": 'easton',
            "model": 'vapor v'
          },
          {
            "type": 'breezers',
            "size": 'md',
            "sex": 'both',
            "brand": 'bauer'
          },
          {
            "type": 'skates',
            "size": '9',
            "sex": 'womens',
            "brand": 'bauer',
            "model": "vapor xxxx"
          }
        ],
        "title": "Almost everything needed for youth boy or girl",
        "zip": 80202
      },
      {
        "donation_id": 3,
        "position": "skater",
        "pieces": [
          {
            "type": 'elbow pads',
            "size": 'sm',
            "sex": 'both',
            "brand": 'bauer'
          },
          {
            "type": 'helmet',
            "size": 'md',
            "sex": 'both',
            "brand": 'easton'
          },
          {
            "type": 'gloves',
            "size": '14 inch',
            "sex": 'both',
            "brand": 'oakley'}
        ],
        "title": "Top half except shoulder pads for youth skater",
        "zip": 55356
      },
      {
        "donation_id": 4,
        "position": "goalie",
        "pieces": [
          {
            "type": 'helmet',
            "size": 'md',
            "sex": 'both',
            "brand": 'easton'
          },
          {
            "type": 'stick',
            "size": 'intermediate',
            "flex": 85,
            "curve": "Hasek",
            "shot": "right",
            "sex": 'both',
            "brand": 'easton'
          }
        ],
        "title": "Some goalie stuff for middle or high school player",
        "zip": 55359
      }
    ]
  }
  // return {
  //   items: $http.get('/api/donations/all')
  // }
})
