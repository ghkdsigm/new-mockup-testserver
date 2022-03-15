module.exports = (req, res, next) => {
    // res.header('X-Hello', 'World')
    next()
    // if (req.path == '/users') {
    //   next()
    // } else {
    //   res.status(400).json({ err: "요청하신 정보가 존재하지않습니다." });
    //   res.status(401).json({ err: "인증에실패했습니다." });
    //   res.status(403).json({ err: "허용되지않습니다." });
    //   res.status(404).json({ err: "페이지가 존재하지않습니다." });
    //   res.status(429).json({ err: "서버가 초과했습니다." });
    //   res.status(500).json({ err: "서버가 오류가발생했습니다." });
    // }
  
  }