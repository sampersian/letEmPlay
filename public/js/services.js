angular.module("letEmPlayApp").service("donationsService", function() {
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
            "brand": 'ccm'}
        ],
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
        "zip": 80202
      }
    ]
  }
})
