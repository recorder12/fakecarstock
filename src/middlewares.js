import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "fakecarstock";
  res.locals.routes = routes;
  res.locals.description =
    "'FakeCarStock.com'은 업로드한 차량 이미지와 동일한 차량 매물을 대형 중고차 사이트에서 검색하여 보여드립니다. 검색된 매물이 존재한다면 확인 후 조심히 거래하시길 권장드립니다.";
  next();
};
