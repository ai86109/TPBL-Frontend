const BASE_URL = 'https://floating-river-74889.herokuapp.com'

export const getStandings = (year, season) => {
  return fetch(`${BASE_URL}/standingsApi/${year}/${season}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const getStats = (nav, subNav, year, statsType, sort) => {
  if(nav === 'player') {
    if(subNav === 'hitting') {
      return fetch(`${BASE_URL}/batterStatsApi/${year}/${statsType}/${sort}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    } else if (subNav === 'pitching') {
      return fetch(`${BASE_URL}/pitcherStatsApi/${year}/${statsType}/${sort}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    }
  } else if(nav === 'team') {
    if(subNav === 'hitting') {
      return fetch(`${BASE_URL}/teamBatterStatsApi/${year}/${statsType}/${sort}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    } else if (subNav === 'pitching') {
      return fetch(`${BASE_URL}/teamPitcherStatsApi/${year}/${statsType}/${sort}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    }
  }
}

export const getHittingStatsLeader = (year) => {
  return Promise.all([
    fetch(`${BASE_URL}/topStatsApi/${year}/hitting/avg`),
    fetch(`${BASE_URL}/topStatsApi/${year}/hitting/h`),
    fetch(`${BASE_URL}/topStatsApi/${year}/hitting/hr`),
    fetch(`${BASE_URL}/topStatsApi/${year}/hitting/rbi`),
    fetch(`${BASE_URL}/topStatsApi/${year}/hitting/sb`)
  ]).then(async([hitting1, hitting2, hitting3, hitting4, hitting5]) => {
    const h1 = await hitting1.json()
    const h2 = await hitting2.json()
    const h3 = await hitting3.json()
    const h4 = await hitting4.json()
    const h5 = await hitting5.json()
    return [[h1, 'avg'], [h2, 'h'], [h3, 'hr'], [h4, 'rbi'], [h5, 'sb']]
  })
}

export const getPitchingStatsLeader = (year) => {
  return Promise.all([
    fetch(`${BASE_URL}/topStatsApi/${year}/pitching/era`),
    fetch(`${BASE_URL}/topStatsApi/${year}/pitching/win`),
    fetch(`${BASE_URL}/topStatsApi/${year}/pitching/sv`),
    fetch(`${BASE_URL}/topStatsApi/${year}/pitching/hld`),
    fetch(`${BASE_URL}/topStatsApi/${year}/pitching/so`)
  ]).then(async([pitching1, pitching2, pitching3, pitching4, pitching5]) => {
    const p1 = await pitching1.json()
    const p2 = await pitching2.json()
    const p3 = await pitching3.json()
    const p4 = await pitching4.json()
    const p5 = await pitching5.json()
    return [[p1, 'era'], [p2, 'win'], [p3, 'sv'], [p4, 'hld'], [p5, 'so']]
  })
}