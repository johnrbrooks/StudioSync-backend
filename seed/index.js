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

  /* const testProspect1 = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'Tyler Schafer',
    email: 'tyler@tyler.com',
    phone: '703-268-0738',
    stage: 'Negotiation',
    probability: 90,
    projected_value: 1200,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Monday',
    notes: 'Wants to sound like Green Day'
  })
  await testProspect1.save()

  const testProspect2 = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'John Brooks',
    email: 'quark934@gmail.com',
    phone: '703-268-0738',
    stage: 'Unqualified',
    probability: 0,
    projected_value: 2100,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Monday',
    notes: 'Wants to sound like State Champs'
  })
  await testProspect2.save()

  const testProspect3 = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'Abby Pierro',
    email: 'apierro@gmail.com',
    phone: '703-895-9600',
    stage: 'Proposal',
    probability: 30,
    projected_value: 800,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Tuesday',
    notes: 'Loves Post Malone'
  })
  await testProspect3.save()

  const testProspect4 = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'Matt Brooks',
    email: 'mbrooks@gmail.com',
    phone: '703-268-0737',
    stage: 'Qualified',
    probability: 50,
    projected_value: 1800,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Friday',
    notes: 'Needs to get it done ASAP'
  })
  await testProspect4.save() */

  /* const testProspect5 = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'Bradley Pierro',
    email: 'bradley@gmail.com',
    phone: '703-268-5555',
    stage: 'Closed',
    probability: 100,
    projected_value: 1550,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Monday',
    notes: 'Just finalized the deal'
  })
  await testProspect5.save() */

  const testProspect6 = new Prospect({
    user_pipeline: '64bec0ada0df3e8c4f855c26',
    contact_name: 'David Brooks',
    email: 'dbrooks@gmail.com',
    phone: '571-268-5555',
    stage: 'Negotiation',
    probability: 90,
    projected_value: 875,
    interested_services: ['Recording', 'Production', 'Mixing'],
    next_follow_up: 'Monday',
    notes: 'Close on this one'
  })
  await testProspect6.save()

  


  /* const testPipeline = await Pipeline.findById('64bec0ada0df3e8c4f855c26')

  if(!testPipeline) {
    console.log('Pipeline not found.')
    return;
  }

  testPipeline.prospects.push(testProspect1._id, testProspect2._id, testProspect3._id, testProspect4._id)

  await testPipeline.save() */
};

const run = async () => {
  await main();
  await db.close();
};

run();