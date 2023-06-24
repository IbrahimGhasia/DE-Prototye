import { Web3Storage, getFilesFromPath } from "web3.storage";
const client = new Web3Storage({
	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE0ZTljNjdFZTk4MkM1NjM3ZjJDQUU4NjRGMTgxNjI4OTZiNGRkZEMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM2MDg2NzY2MTUsIm5hbWUiOiJCaW9UcnVzdCJ9.H_aofK1aL0ICC7LHakSem2YO0poS5rvO7QBzb44E2YY",
});

	const files = await getFilesFromPath(
		"../image/ibrahim_finger.jpg"
	);
	const rootCid = await client.put(files);
	console.log(rootCid);


