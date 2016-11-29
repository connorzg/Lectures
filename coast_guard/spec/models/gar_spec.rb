require 'rails_helper'

RSpec.describe Gar, type: :model do
  describe 'validations' do
    let(:gar) { Gar.new }

    [:supervision, :planning, :team_fitness, :team_selection, :complexity, :environment].each do |field|
      describe field do
        context 'when value is nil' do
          it 'should not be valid' do
            allow(gar).to receive(field).and_return nil
            expect(gar.valid?).to be false
            expect(gar.errors.messages[field]).to include "can't be blank"
          end
        end

        context 'when value is not a number' do
          it 'should not be valid' do
            allow(gar).to receive(field).and_return 'foobar'
            expect(gar.valid?).to be false
            expect(gar.errors.messages[field]).to include 'is not a number'
          end
        end

        context 'when value is less than 1' do
          it 'should not be valid' do
            allow(gar).to receive(field).and_return 0
            expect(gar.valid?).to be false
            expect(gar.errors.messages[field]).to include 'must be greater than or equal to 1'
          end
        end

        context 'when value is greater than 10' do
          it 'should not be valid' do
            allow(gar).to receive(field).and_return 11
            expect(gar.valid?).to be false
            expect(gar.errors.messages[field]).to include 'must be less than or equal to 10'
          end
        end

        context 'when value is a float' do
          it 'should not be valid' do
            allow(gar).to receive(field).and_return 1.1
            expect(gar.valid?).to be false
            expect(gar.errors.messages[field]).to include 'must be an integer'
          end
        end
      end
    end
  end

  describe '#total' do
    let(:gar) { Gar.new(supervision: 1, planning: 2, team_fitness: 3, team_selection: 4, environment: 5, complexity: 6) }

    context 'when gar is valid' do
      it 'should sum up #supervision, #planning, #team_fitness, #team_selection, #environment and #complexity' do
        expect(gar.total).to eq 21
      end
    end

    context 'when gar is not valid' do
      it 'should return 0' do
        allow(gar).to receive(:valid?).and_return false
        expect(gar.total).to eq 0
      end
    end
  end

  describe '#color' do
    context 'when #total returns 0' do
      it 'should return "N/A"'
    end

    context 'when #total returns a value less than or equal to 23' do
      it 'should return "Green"'
    end

    context 'when #total is between 24 and 44' do
      it 'should return "Amber"'
    end

    context 'when #total is greater than 44' do
      it 'should return "Red"'
    end
  end
end
