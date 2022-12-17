CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "public"."addresses" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "user_id" uuid,
    "city" text,
    "country" text,
    "line1" text,
    "line2" text,
    "phone_number" text,
    "postal_code" int4,
    "region" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."approval_scopes" (
    "scope_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "approval_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    PRIMARY KEY ("scope_id","approval_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."approvals" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "client_id" text,
    "user_id" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."client_approvals" (
    "client_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "approval_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    PRIMARY KEY ("client_id","approval_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."client_scopes" (
    "scope_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "client_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    PRIMARY KEY ("scope_id","client_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."clients" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "user_id" uuid,
    "contacts" _text,
    "description" text,
    "grant_types" _text,
    "is_first_party" bool,
    "jwks" jsonb,
    "jwks_uri" text,
    "logo_uri" text,
    "name" text,
    "policy_uri" text,
    "public_keys_configuration" text,
    "redirect_uris" _text,
    "response_types" _text,
    "refresh_token_rotation_type" text,
    "secret" text,
    "software_id" text,
    "software_version" text,
    "tos_uri" text,
    "token_endpoint_auth_method" text,
    "type" text,
    "uri" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."jwks" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "client_id" uuid,
    "jwk" jsonb,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."profiles" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "user_id" uuid,
    "birth_date" timestamptz,
    "first_name" text,
    "gender" text,
    "locale" text,
    "last_name" text,
    "middle_name" text,
    "nickname" text,
    "profile" text,
    "picture" text,
    "website" text,
    "zone_info" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."scopes" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "description" text,
    "display_name" text,
    "name" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."user_approvals" (
    "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "approval_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    PRIMARY KEY ("user_id","approval_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."users" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamptz,
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    "default_shipping_address_id" uuid,
    "default_billing_address_id" uuid,
    "email" text,
    "email_verified" bool,
    "password" text,
    "phone_number" text,
    "phone_number_verified" bool,
    "username" text,
    PRIMARY KEY ("id")
);

ALTER TABLE "public"."addresses" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."addresses" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."addresses" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."approval_scopes" ADD FOREIGN KEY ("scope_id") REFERENCES "public"."scopes"("id");
ALTER TABLE "public"."approval_scopes" ADD FOREIGN KEY ("approval_id") REFERENCES "public"."approvals"("id");
ALTER TABLE "public"."client_approvals" ADD FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id");
ALTER TABLE "public"."client_approvals" ADD FOREIGN KEY ("approval_id") REFERENCES "public"."approvals"("id");
ALTER TABLE "public"."client_scopes" ADD FOREIGN KEY ("scope_id") REFERENCES "public"."scopes"("id");
ALTER TABLE "public"."client_scopes" ADD FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id");
ALTER TABLE "public"."clients" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."jwks" ADD FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id");
ALTER TABLE "public"."profiles" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."user_approvals" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."user_approvals" ADD FOREIGN KEY ("approval_id") REFERENCES "public"."approvals"("id");
ALTER TABLE "public"."users" ADD FOREIGN KEY ("default_shipping_address_id") REFERENCES "public"."addresses"("id");
ALTER TABLE "public"."users" ADD FOREIGN KEY ("default_billing_address_id") REFERENCES "public"."addresses"("id");
