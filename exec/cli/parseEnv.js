import {parseEnv} from "../../src/cli/env.js";

process.env.RSS_value1 = 'property';

process.env.RSS_Value2 = 'another_property';

parseEnv();
