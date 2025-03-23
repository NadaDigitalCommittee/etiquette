import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

const dummyData: {
	slug: string;
	name: string;
	description: string;
	capacity: {
		first: number;
		second: number;
	};
}[] = [
	{
		slug: "train",
		name: "鉄道研究部",
		description:
			"運転シュミレータの本格版として、神戸線の快速電車を本物に似た運転台で運転できます。10歳以上限定で、開始時刻の5分前にお越しください。",
		capacity: {
			first: 25,
			second: 25,
		},
	},

	{
		slug: "bingo",
		name: "陸上競技部",
		description:
			"今年も陸上部カジノにてビンゴ大会を行います！皆さんが欲しかったあの灘校グッズなどなど豪華景品が当たるかも？！ぜひお楽しみに！",
		capacity: {
			first: 80,
			second: 80,
		},
	},

	{
		slug: "chemical",
		name: "化学研究部",
		description:
			"化学マジックの席の抽選券です。1枠当たり1席となっています。抽選に当たらなかった場合でも立ち見は可能ですので保護者の方が席にいるお子さんを見守りたい場合などでも化学マジックを一緒にご覧になることができます。ぜひ化学の不思議な世界をお楽しみください！",
		capacity: {
			first: 128,
			second: 128,
		},
	},

	{
		slug: "conan",
		name: "コナンサークル",
		description:
			"トリック実演では、実際にコナンの漫画で使われたトリックをみなさんの目の前でお見せします。是非、参加してください。",
		capacity: {
			first: 60,
			second: 60,
		},
	},

	{
		slug: "origami",
		name: "古典文化同好会 折り紙班",
		description:
			"折り紙班では、1日1回折り紙講座を実施します！部員の好きな折り紙を聞いてみるチャンスですよ！",
		capacity: {
			first: 20,
			second: 20,
		},
	},

	{
		slug: "geo",
		name: "地学研究部",
		description:
			"毎年大好評の砂金掘り体験です！今年から砂金以外の鉱物も入っています。18歳以下限定となります。中学棟4階にて実施していますのでぜひお越しください!",
		capacity: {
			first: 120,
			second: 120,
		},
	},
];

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.use(
	"/activities",
	cors({
		origin: ["http://localhost:5173"],
	}),
);

const activityRoute = app.get("/activities", (c) => {
	return c.json(dummyData);
});

export type ActivitiesApiRoutes = typeof activityRoute;

export default app;
