const user = {
  id: 3803349454,
  id_str: '3803349454',
  name: 'northcoders',
  screen_name: 'northcoders',
  location: 'Manchester, England',
  description: 'The coding bootcamp for the North. Learn to code in 12 weeks. Launch your coding career. May SOLD OUT. Apply now for August 14th https://t.co/qu7tkdtXt1',
  url: 'https://t.co/mdYokyFqdT',
  entities: {
    url: {
      urls: [
        {
          url: 'https://t.co/mdYokyFqdT',
          expanded_url: 'http://northcoders.com/apply',
          display_url: 'northcoders.com/apply',
          indices: [
            0,
            23
          ]
        }
      ]
    },
    description: {
      urls: [
        {
          url: 'https://t.co/qu7tkdtXt1',
          expanded_url: 'http://goo.gl/2OSlsM',
          display_url: 'goo.gl/2OSlsM',
          indices: [
            129,
            152
          ]
        }
      ]
    }
  },
  protected: false,
  followers_count: 1354,
  friends_count: 1115,
  listed_count: 68,
  created_at: 'Mon Sep 28 11:40:55 +0000 2015',
  favourites_count: 595,
  verified: false,
  statuses_count: 879,
  profile_background_color: '000000',
  profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
  profile_image_url: 'http://pbs.twimg.com/profile_images/668792792689344512/5P90PT8v_normal.png'
};

const tweetData = {
  body: [{
    tweets: [
      {id: 1, created_at: 'Tue Nov 11 22:01:16 +0000 2014', error: 'error'},
      {id: 2, created_at: 'Sun Mar 07 21:00:49 +0000 2010'},
      {id: 3, created_at: 'Thu Nov 13 15:34:38 +0000 2014'},
      {id: 3, created_at: 'Sun Dec 07 18:17:28 +0000 2014'}]
  }]
};

module.exports = {
  user, tweetData
};
