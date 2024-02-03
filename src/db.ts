import { Pool } from "pg";

const connectionString = 'postgres://fahkgvue:35HU88iP7qXS_gSZiAZe_TXu_b8dMonb@motty.db.elephantsql.com/fahkgvue'

const db = new Pool({connectionString});

export default db