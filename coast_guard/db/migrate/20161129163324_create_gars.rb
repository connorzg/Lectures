class CreateGars < ActiveRecord::Migration[5.0]
  def change
    create_table :gars do |t|
      t.integer :supervision
      t.integer :planning
      t.integer :team_selection
      t.integer :team_fitness
      t.integer :environment
      t.integer :complexity

      t.timestamps
    end
  end
end
