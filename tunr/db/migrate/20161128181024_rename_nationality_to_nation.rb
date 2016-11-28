class RenameNationalityToNation < ActiveRecord::Migration[5.0]
  def change
    rename_column :artists, :nationality, :national
  end
end
