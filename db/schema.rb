# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_07_202809) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reps", force: :cascade do |t|
    t.bigint "workout_id"
    t.string "rep_count", default: "0"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "workout_date"
    t.index ["workout_id"], name: "index_reps_on_workout_id"
  end

  create_table "stats", force: :cascade do |t|
    t.string "stat_name"
    t.integer "measurement", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stats_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "stat_id", null: false
    t.index ["stat_id", "user_id"], name: "index_stats_users_on_stat_id_and_user_id"
    t.index ["user_id", "stat_id"], name: "index_stats_users_on_user_id_and_stat_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "workout_name"
    t.bigint "category_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_workouts_on_category_id"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

  add_foreign_key "reps", "workouts"
  add_foreign_key "workouts", "categories"
  add_foreign_key "workouts", "users"
end
