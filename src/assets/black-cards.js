const blackCards = [
  'Favorite Advent traditions include _________________',
  'I can\'t be with someone who doesn\'t understand the importance of ___________',
  'When the family discussions get out of control and people start talking about________',
  // 'Yes, my belief in _________ is consistent with my belief in __________. (pick 2)',
  'Just because I\'m Mennonite, doesn\'t mean I have a ________',
  'Over the years, Mennonites have contributed a lot to __________.',
  'Mennonite mating rituals',
  'You keep using that term; I don\'t think you know what it means.',
  'What I find sexy ',
  'It\'s not true if it\'s not in _________.',
  'Nothing pleases me quite like a ______________ in a Sunday service.',
  'Which just goes to prove that Mennos are amazing entrepreneurs.',
  'Kids these days just don\'t understand about ___________',
  'I\'m not afraid of a zombie apocolypse because I\'ve already lived through ________________.',
  'Am I a bad Mennonite if I don\'t have any ________________?',
  'There\'s no such thing as ____________.'
  // Favorite vacation All is fair in ________ and
  // ___________ (pick 2)
  // What I\'m giving up for Lent It\'s no use crying over
  // _____________.
  // My utopia includes
  // _______________
  // All ________ is good
  // _________ (pick 1)
  // __________ is surely one of the
  // signs of the apocolypse.
  // _____________ is part of my
  // faith exploration journey.
  // The early bird gets the
  // ______________
  // __________ is just another way
  // to say I love you.
  // Why does no one today
  // recognize the importance of
  // ____________?
  // If a genie granted me one wish, I
  // would abolish ______________.
  // Be on the lookout for a new
  // ______________
  // We\'ve got nothing to lose but our
  // __________.
  // Some are born to __________;
  // some aspire to _________ and
  // others have ___________ thrust
  // upon them (1 card)
  // _________ is my hope of
  // salvation.
  // ___________: It\'s what real
  // mennonites do.
  // _________ always gets me into
  // trouble.
  // ____________ makes me want
  // to _________. (pick 2)
  // On earth as it is in Heaven just
  // means ____________.
  // My Church taught me to feel
  // guilty about ___________.
  // Beauty may be in the eye of the
  // beholder but ________ is
  // universally adored.
  // Sure, there\'s no peace without
  // justice, but there\'s also no
  // __________ without
  // __________. (pick 2)
  // Luke, use the ____________.
  // A Little Bit of __________ is a
  // Dangerous Thing.
  // The Enemy of My Enemy is My
  // Excuse for ______________.
  // Toto, I\'ve a Feeling we\'re not in
  // ________ anymore.
  // They may take our lives but
  // they\'ll never take our
  // __________.
  // Friends don\'t let friends engage
  // in ___________.
  // Will you let me be your
  // _________? Pray that I will have
  // the grace to let you be my
  // _______ too. (pick 1)
  // Do not let yourself be led into
  // temptation by the
  // ____________.
  // If you haven\'t noticed ________,
  // you\'re just not paying attention.
  // All that Glitters is not
  // ____________.
  // All\'s Fair in Love and
  // __________.
  // As useful as _________ at a
  // potluck.
  // Death by a thousand
  // __________.
  // The rain falls on the _______
  // and the _________ alike. (pick 2)
  // Out of the frying pan and into the
  // __________.
  // A good ________ is hard to find. The grass is always greener on
  // the other side of the ________.
  // One who lives by the _________
  // dies by the ___________.
  // The Seven ________ of Highly
  // Effective Mennonites
  // The Life-Changing Magic of
  // ____________.
  // What to expect when you\'re
  // ___________.
  // A journey of a thousand miles
  // begins with _________.
  // One person\'s trash is another\'s
  // __________.
  // Sticks and stones may break my
  // bones but ________ will never
  // hurt me.
  // The best things in life are
  // ____________.
  // Time flies when you\'re
  // ___________.
  // Truth is stranger than
  // ___________.
  // Be the ________ that you want
  // to see in the world.
  // Walk softly and carry a big
  // ___________.
  // My parents are_____________. You and I are related by
  // __________.
  //
  // I know you\'re a Mennonite by
  // your ____________
  // My religion doesn\'t allow this in
  // my house
  // When the going gets tough, the
  // Mennonites start talking about
  // _____________.
  // Seeing this term makes me think
  // there might be Mennonite terms I
  // know nothing about.
  // Now is the perfect time for
  // ____________.
  // All I really need to know I learned
  // in ___________.
  // They say the pen is mightier than
  // the sword but I say the
  // _________ is mightier than the
  // _________. (pick 2)
  // You can never have too many
  // ______________.
  // If you don\'t have anything nice to
  // say, say it with (or while)
  // __________.
  // It\'s not over until ____________.
  // Just please stop it already with
  // all that talk about ___________.
  // My pastor has convinced me of
  // ____________.
  // The Gospel writers weren\'t
  // thinking of ________ when they
  // wrote the Bible.
  // I would never talk about
  // _________ in front of a fellow
  // Mennonite.
  // ___________ is where the power
  // lies.
  // We may not all be theologians
  // but I know that ______ is True.
  // __________ looks normal but it\'s
  // not.
  // __________ is the opiate of the
  // masses.
  // You won\'t believe what I learned
  // about ___________.
  // I\'m old enough to remember
  // when ________ wasn\'t just a
  // Mennonite thing.
  // You had me at _________.
  // Trust me - I\'m a _________.
  // My Oma always told me that life
  // is like a __________.
  // A _________ a day keeps the
  // deacon away.
  // We\'re ignoring the ________
  // again .
  // Good __________ make good
  // neighbours.
  // I\'ve never met a ________ I
  // didn\'t like.
  // Chicken Soup for the
  // __________ Soul
  // ___________ are the devil\'s
  // workshop.
  // You\'re preaching to the
  // __________.
  // The only thing we have to fear is
  // ____________.
  // ____________ matters today
  // more than ever.
  // Never feed the ____________.

]
const randomBlack = function () {
  return blackCards[Math.floor(Math.random() * blackCards.length)]
}

export {blackCards, randomBlack}
