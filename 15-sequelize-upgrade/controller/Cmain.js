const { Player, Profile, Team } = require('../models');
const { Op } = require('sequelize');

// TODO: 컨트롤러
exports.index = (req, res) => {
  res.render('index');
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();

    res.send(players);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      where: { player_id },
    });
    res.send(player);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body);
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name,
      age,
      team_id,
    });

    res.send(newPlayer);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      { team_id },
      { where: { player_id } }
    );

    res.send(updatedPlayer); // 성공시 [1], 실패시 [0]
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({ where: { player_id } });

    // console.log(isDeleted); // 성공시 [1], 실패시 [0]

    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.getTeams = async (req, res) => {
  try {
    // 쿼리 스트링 꺼내오기 (req.query)
    const { sort, search } = req.query;
    let result;

    // sort 키가 있으면 name 기준 오름차순 정렬
    if (sort === 'name_asc') {
      result = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'ASC']], // name 속성 기준 오름차순
      });
    } else if (search) {
      result = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else if (!sort) {
      // 없으면 findAll()
      result = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    } else {
      result = '잘못된 경로입니다.';
    }

    res.send(result);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      attributes: ['team_id', 'name'],
      where: { team_id },
    });

    res.send(team);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id },
      include: [{ model: Player }],
    });

    res.send(team);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error');
  }
};
