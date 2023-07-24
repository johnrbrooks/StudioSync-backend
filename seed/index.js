const db = require("../db");
const { User, Pipeline, Prospect } = require("../models");

const main = async () => {

  /* const testUser = new User({
    username: 'test user',
    password: 'password',
    first_name: 'John',
    mode: true,
  })
  await testUser.save() */

  /* const testPipeline = new Pipeline({
    user: '64bebf5fd044b9268edfd073',
    prospects: [],
  })
  await testPipeline.save() */

  /* const testProspect = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'Tyler',
    email: 'tyler@tyler.com',
    phone: '703-268-0738',
    stage: 'Negotiation',
    probability: 90,
    projected_value: 1200,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Monday',
    notes: 'Wants to sound like Green Day'
  }) */
  /* await testProspect.save()

  const testPipeline = await Pipeline.findById('64bec0ada0df3e8c4f855c26')

  if(!testPipeline) {
    console.log('Pipeline not found.')
    return;
  }

  testPipeline.prospects.push(testProspect._id)

  await testPipeline.save() */
};

const run = async () => {
  await main();
  await db.close();
};

run();